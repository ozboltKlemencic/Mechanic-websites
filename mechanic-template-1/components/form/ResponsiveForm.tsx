import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // For redirect
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { FiSend } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify"; // Correctly import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Required styles for react-toastify

interface FormData {
  number: string;
  name: string;
  surname: string;
  email: string;
  message: string;
}

const ResponsiveForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    number: "",
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const [state, handleSubmit] = useForm("xgvegayq"); // Replace with your Formspree ID
  const router = useRouter(); // For redirect

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
  };

  // Handle success and redirection after form submission
  useEffect(() => {
    if (state.succeeded) {
      toast.success("Sporočilo je bilo uspešno poslano!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        pauseOnHover: true,
      });

      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  }, [state.succeeded, router]);

  return (
    <>
      <div className="z-[20000000000000]">
        <ToastContainer />
      </div>

      <div className="min-h-screen bg-green-50/30 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="flex flex-col md:flex-row">
              <div className="relative md:w-1/2">
                <Image
                  src="/images/banners/kontakt.jpg"
                  alt="avtoservisna delavnica"
                  className="size-full object-cover"
                  width={500}
                  height={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <h2 className="mb-4 text-3xl font-bold">Pišite nam</h2>
                    <p className="text-lg">
                      Pošljite popvpraševanje preko danega obrazca.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 text-black md:w-1/2">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Ime
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                      required
                      aria-label="Napiši svoje ime"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="surname"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Priimek
                    </label>
                    <input
                      type="text"
                      id="surname"
                      name="surname"
                      value={formData.surname}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                      required
                      aria-label="Napiši svoj priimek"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      E-pošta
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                      required
                      aria-label="Napiši svojo epošto"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Sporočilo
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 lg:max-h-60"
                      required
                      aria-label="Napiši sporočilo"
                    ></textarea>
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>

                  <button
                    type="submit"
                    className="primary-gradient flex w-full items-center justify-center gap-2 rounded-md px-4 py-3 text-white transition-colors duration-200 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    disabled={state.submitting}
                  >
                    <FiSend className="text-lg" />
                    Pošlji sporočilo
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveForm;
