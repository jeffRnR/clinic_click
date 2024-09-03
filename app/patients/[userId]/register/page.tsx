import RegisterForm from "@/components/forms/RegisterForm"
import { getUser } from "@/lib/actions/patient.actions"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const Register = async ({ params: { userId } }: SearchParamProps) => {

  const user = await getUser(userId);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="patient"
            width={1000}
            height={1000}
            className="mb-12 mt-2 h-10 w-fit"
          />
          <RegisterForm user={user} />
          <p className="copyright text-sm mt-14 py-6">© 2024 Clinic Click</p>

        </div>
      </section>
      <Image
        src="/assets/images/register-img.png"
        width={1000} height={1000} alt="patient"
        className="side-img max-w-[390px] rounded-lg m-2"
      />
    </div>
  )
}

export default Register

