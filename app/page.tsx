import PatientForm from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">

      {/* TODO: OTP verification | passkey modal */}
      <section className="remove-scrollbar container my-auto">
        <div>
          <Image
            src="/assets/icons/logo-full.svg"
            alt="patient"
            width={1000}
            height={1000}
            className="mb-12 mt-2 h-10 w-fit"
          />
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between mb-2">
            <p className="justify-items-end text-dark-600 xl:text-left">© 2024 Clinic Click</p>
            <Link href="?admin=true" className="text-green-500">Admin</Link>
          </div>
        </div>
      </section>
      <Image src="/assets/images/onboarding-img.png" width={1000} height={1000} alt="patient" className="side-img max-w-[50%] m-2 rounded-lg" />
    </div>
  );
}
