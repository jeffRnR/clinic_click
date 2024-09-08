import AppointmentForm from "@/components/forms/AppointmentForm";
import PatientForm from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";

export default async function NewAppointment({ params: { userId }}: SearchParamProps) {
  const patient = await getPatient(userId);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="patient"
            width={1000}
            height={1000}
            className="mb-12 mt-2 h-10 w-fit"
          />
          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient.$id}
           />
          <p className="copyright text-sm mt-14 py-6">© 2024 Clinic Click</p>
        </div>
      </section>
      <Image src="/assets/images/appointment-img.png" width={1000} height={1000} alt="appointment" className="side-img max-w-[390px] bg-bottom" />
    </div>
  );
}
