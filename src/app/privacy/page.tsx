import { redirect } from "next/navigation";

// `/privacy` defaults to the WPrint policy.
export default function PrivacyIndexPage() {
  redirect("/privacy/wprint");
}
