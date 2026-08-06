"use client";

import { useEffect, useState, useRef, use } from "react";
import { supabase } from "@/lib/supabase";
import { ShoppingBag, MapPin, Phone, Printer, Copy, Check, Home, Building2 } from "lucide-react";
import Link from "next/link";

export default function InvoicePage({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<{ print?: string }> }) {
  const { id } = use(params);
  const { print } = use(searchParams);
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const hasAutoPrinted = useRef(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    const fetchOrder = async () => {
      const { data, error: dbError } = await supabase
        .from('orders')
        .select(`
          *,
          customers(name, phone),
          order_items (*)
        `)
        .eq('id', id)
        .single();

      if (dbError || !data) {
        setError(true);
      } else {
        setOrder(data);
        document.title = `Invoice - ${data.id}`;
      }
      setLoading(false);
    };

    fetchOrder();
  }, [id]);

  useEffect(() => {
    if (!loading && order && print === "1" && !hasAutoPrinted.current) {
      hasAutoPrinted.current = true;
      const timer = setTimeout(() => window.print(), 400);
      return () => clearTimeout(timer);
    }
  }, [loading, order, print]);

  if (loading) {
    return (
      <div className="min-h-screen bg-bg-light flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-12 h-12 bg-bg-dark rounded-full flex items-center justify-center">
            <ShoppingBag className="w-6 h-6 text-gold" />
          </div>
          <p className="text-text-muted font-bold tracking-widest uppercase text-sm">Generating Digital Bill...</p>
        </div>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="min-h-screen bg-bg-light flex flex-col items-center justify-center gap-4">
        <p className="text-bg-dark font-bold text-xl">Invoice Not Found</p>
        <Link href="/" className="px-6 py-2 bg-gold hover:bg-gold-light rounded-lg text-bg-dark font-bold transition-colors">
          Return to Dashboard
        </Link>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-bg-light-alt text-text-on-light font-sans py-12 px-4 print:p-0 print:bg-white flex flex-col items-center">
      <style>{`
        @media print {
          @page {
            margin: 10mm;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          body {
            background-color: white !important;
            color: black !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .invoice-logo {
            max-height: 70px !important;
            width: auto !important;
          }
        }
      `}</style>
      
      {/* Top Navigation / Action Bar (Hidden when printing) */}
      <div className="w-full max-w-2xl flex justify-end items-center mb-8 print:hidden gap-4">
        <div className="flex items-center gap-3">
          <button 
            onClick={handleCopyLink}
            className="flex items-center gap-2 bg-white hover:bg-bg-light-alt text-text-muted hover:text-gold-dark font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-lg shadow-sm border border-gold-dark transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-600" /> Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" /> Copy Link
              </>
            )}
          </button>
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 bg-gold hover:bg-gold-light text-bg-dark font-bold text-xs uppercase tracking-wider px-5 py-2 rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" /> Download PDF / Print
          </button>
        </div>
      </div>

      {/* The Invoice Document */}
      <div className="w-full max-w-2xl bg-white border border-gold-dark rounded-2xl shadow-xl print:shadow-none print:border-none print:rounded-none overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-bg-dark border-b border-gold py-5 px-6 sm:px-10 print:py-4 print:px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          
          {/* Left Side: Logo & Brand */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 bg-white/5 p-2 rounded-lg">
              <img src="/logo.png" alt="Magizhrasi Logo" className="invoice-logo h-[50px] sm:h-[60px] w-auto object-contain" />
            </div>
            <div className="flex flex-col text-left">
              <h1 className="text-xl sm:text-2xl font-black text-gold leading-none tracking-wide">Magizhrasi</h1>
              {process.env.NEXT_PUBLIC_GST_NUMBER && (
                <div className="flex items-center gap-1.5 mt-1.5">
                  <span className="text-gold font-bold text-[9px] uppercase tracking-wider bg-gold/10 px-1.5 py-0.5 rounded">GSTIN</span>
                  <span className="text-text-on-dark text-xs font-semibold uppercase tracking-wider">{process.env.NEXT_PUBLIC_GST_NUMBER}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Side: Invoice Info & Address */}
          <div className="flex flex-col text-left sm:text-right gap-1 text-sm text-text-on-dark font-medium sm:items-end w-full sm:w-auto">
            <p className="text-gold font-black tracking-widest text-sm mb-1 uppercase">
              Invoice <span className="text-text-on-dark">#{order.id.split('-').pop()}</span>
            </p>
            <div className="flex items-start sm:items-center gap-1.5 max-w-[280px] sm:justify-end text-xs leading-relaxed opacity-90">
              <MapPin className="w-3 h-3 text-gold shrink-0 mt-0.5 sm:mt-0" />
              <span>Annai Sathiya Nagar, Pennagaram Main Road, Dharmapuri District, Tamil Nadu</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs opacity-90">
              <Phone className="w-3 h-3 text-gold shrink-0" />
              <span>+91 {process.env.NEXT_PUBLIC_STORE_PHONE}</span>
            </div>
          </div>

        </div>

        {/* Invoice Meta Data */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-8 sm:p-12 print:p-6 border-b border-gold/50 bg-white">
          <div>
            <h3 className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] mb-3">Billed To</h3>
            <p className="text-base font-bold text-text-on-light">{order.customers?.name || "Guest Customer"}</p>
            {order.customers?.phone && (
              <p className="text-sm text-text-muted font-semibold mt-1">+91 {order.customers.phone.split("_")[0]}</p>
            )}
          </div>
          <div className="sm:text-right flex flex-col sm:items-end">
            <h3 className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] mb-3 self-start sm:self-auto">Order Details</h3>
            <div className="inline-block text-left text-sm space-y-1">
              <div className="flex gap-2">
                <span className="text-text-muted font-bold w-12 text-left sm:text-right">Date:</span>
                <span className="text-text-on-light font-black">{new Date(order.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-text-muted font-bold w-12 text-left sm:text-right">Time:</span>
                <span className="text-text-on-light font-black">{new Date(order.created_at).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-text-muted font-bold w-12 text-left sm:text-right">Type:</span>
                <span className="text-text-on-light font-black uppercase">{order.source} SALE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Items Table */}
        <div className="print:py-4 bg-white">
          <div className="w-full overflow-x-auto scrollbar-thin pb-2">
            <table className="w-full text-left border-collapse min-w-[400px]">
            <thead className="bg-bg-dark">
              <tr>
                <th className="py-4 px-8 text-[11px] font-bold text-text-on-dark uppercase tracking-wider">Item Description</th>
                <th className="py-4 text-[11px] font-bold text-text-on-dark uppercase tracking-wider text-center">Qty</th>
                <th className="py-4 text-[11px] font-bold text-text-on-dark uppercase tracking-wider text-right">Price</th>
                <th className="py-4 pr-8 text-[11px] font-bold text-text-on-dark uppercase tracking-wider text-right">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold/20">
              {order.order_items.filter((item: any) => !item.snapshot_name.startsWith('GST (')).map((item: any, index: number) => (
                <tr key={index} className={index % 2 === 0 ? "bg-bg-light" : "bg-bg-light-alt"}>
                  <td className="py-6 pl-8 pr-4 print:py-3">
                    <p className="text-sm font-bold text-text-on-light">{item.snapshot_name}</p>
                  </td>
                  <td className="py-6 px-4 print:py-3 text-center text-sm font-bold text-text-on-light">{item.quantity}</td>
                  <td className="py-6 pl-4 print:py-3 text-right text-sm font-bold text-text-on-light">₹{item.snapshot_price.toLocaleString(undefined, {minimumFractionDigits: 2})}</td>
                  <td className="py-6 pl-4 pr-8 print:py-3 text-right text-sm font-black text-text-on-light">₹{(item.snapshot_price * item.quantity).toLocaleString(undefined, {minimumFractionDigits: 2})}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>

        {/* Totals Section */}
        <div className="bg-white border-t border-gold p-8 sm:p-12 print:p-6 flex justify-end">

            {/* Calculations */}
            <div className="w-full sm:w-1/2 space-y-3">
              {(order.discount_amount > 0 || order.delivery_fee > 0) && (
                <div className="flex justify-between items-center text-sm">
                  <span className="text-text-muted font-bold uppercase tracking-wider">Subtotal</span>
                  <span className="font-bold text-text-on-light">₹{order.subtotal.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                </div>
              )}
              
              {order.discount_amount > 0 && (
                <div className="flex justify-between items-center text-sm">
                  <span className="text-text-muted font-bold uppercase tracking-wider">
                    Discount {order.discount_type === 'PERCENT' ? `(${order.discount_value}%)` : ''}
                  </span>
                  <span className="font-bold text-[#E11D48]">-₹{order.discount_amount.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                </div>
              )}

              {order.delivery_fee > 0 && (
                <div className="flex justify-between items-center text-sm">
                  <span className="text-text-muted font-bold uppercase tracking-wider">Delivery Fee</span>
                  <span className="font-bold text-text-on-light">₹{order.delivery_fee.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                </div>
              )}

              {order.order_items.find((item: any) => item.snapshot_name.startsWith('GST (')) && (
                <div className="flex justify-between items-center text-sm">
                  <span className="text-text-muted font-bold uppercase tracking-wider">{order.order_items.find((item: any) => item.snapshot_name.startsWith('GST (')).snapshot_name}</span>
                  <span className="font-bold text-text-on-light">₹{order.order_items.find((item: any) => item.snapshot_name.startsWith('GST (')).snapshot_price.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                </div>
              )}

              <div className="border-t border-gold pt-4 mt-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-2">
                <span className="text-sm font-black text-gold-dark uppercase tracking-widest shrink-0">Total Amount</span>
                <span className="text-[28px] sm:text-3xl font-black text-text-on-light self-end sm:self-auto leading-none mt-1 sm:mt-0">₹{order.grand_total.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
              </div>
            </div>
        </div>
        
        {/* Footer */}
        <div className="border-t border-gold p-6 print:p-4 text-center bg-bg-dark flex flex-col items-center justify-center gap-1.5">
          <p className="text-xs font-bold text-gold tracking-wider uppercase">Style in Every Thread</p>
          <p className="text-[9px] font-bold text-text-on-dark uppercase tracking-[0.15em]">Powered by cenexa system @2026</p>
        </div>

      </div>
    </div>
  );
}
