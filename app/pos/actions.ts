"use server";

export async function verifyPasscode(enteredPasscode: string): Promise<boolean> {
  const correctPasscode = process.env.PASSCODE || process.env.NEXT_PUBLIC_PASSCODE || "Admin123";
  const normalizedEntered = enteredPasscode.replace(/\s/g, "");
  return normalizedEntered === correctPasscode;
}
