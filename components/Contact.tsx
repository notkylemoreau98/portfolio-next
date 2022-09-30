import {
  NewspaperIcon,
  MapPinIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

// Updates need
// Form Error Handling
// Last Name Dedicated Support

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:williamkylemoreau@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-3xl font-light text-center">
          Want to know more? <br />
          Contact me through any of the options below!
        </h4>

        <div className="space-y-6">
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#5B6DBD]/50 w-7 h-7" />
            <a
              href="mailto:williamkylemoreau@gmail.com"
              className="text-2xl hover:text-[#5B6DBD]"
            >
              williamkylemoreau@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#5B6DBD]/50 w-7 h-7" />
            <p className="text-2xl">Los Angeles, CA</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <NewspaperIcon className="text-[#5B6DBD]/50 w-7 h-7" />
            <p className="text-2xl hover:text-[#5B6DBD]">Resume</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          ></textarea>
          <button className="bg-[#5b6dbd] py-5 px-10 rounded-md text-black font-bold text-lg focus:bg-[#5b6dbd]/80">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
