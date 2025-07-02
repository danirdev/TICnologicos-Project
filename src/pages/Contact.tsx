import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  CheckCircle,
  AlertCircle,
  Send,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "contact.validation.name"),
  email: z.string().email("contact.validation.email"),
  message: z.string().min(10, "contact.validation.message"),
});

type ContactForm = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", data);
      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.info.email"),
      value: "ticnologicos.AADL@techflow.com",
      href: "mailto:ticnologicos.AADL@techflow.com",
      color: "text-blue-500",
    },
    {
      icon: Phone,
      label: t("contact.info.phone"),
      value: "+54 (388) 3118692",
      href: "tel:+543883118692",
      color: "text-green-500",
    },
    {
      icon: MapPin,
      label: t("contact.info.location"),
      value: t("contact.info.address"),
      href: "#",
      color: "text-red-500",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/alejandro-samuel-rg/",
      color: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/alejandro-samuel-mercado",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/techflow",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl px-4 mx-auto text-center text-white">
          <motion.h1
            className="mb-6 text-5xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t("contact.title")}
          </motion.h1>
          <motion.p
            className="text-xl text-indigo-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("contact.subtitle")}
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              className="p-8 bg-white border-2 border-gray-200 shadow-xl dark:bg-gray-800 rounded-2xl max-h-fit"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                {t("contact.form.title")}
              </h3>

              {submitStatus === "success" && (
                <motion.div className="flex items-center p-4 mb-6 space-x-2 border border-green-200 rounded-lg bg-green-50 dark:bg-green-900/20 dark:border-green-800">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 dark:text-green-300">
                    {t("contact.feedback.success")}
                  </span>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div className="flex items-center p-4 mb-6 space-x-2 border border-red-200 rounded-lg bg-red-50 dark:bg-red-900/20 dark:border-red-800">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="text-red-700 dark:text-red-300">
                    {t("contact.feedback.error")}
                  </span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t("contact.form.name")}
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    className="w-full px-4 py-3 text-gray-900 transition-colors bg-white border border-gray-300 rounded-lg dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder={t("contact.placeholder.name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {t(errors.name.message || "")}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t("contact.form.email")}
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full px-4 py-3 text-gray-900 transition-colors bg-white border border-gray-300 rounded-lg dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder={t("contact.placeholder.email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {t(errors.email.message || "")}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className="w-full px-4 py-3 text-gray-900 transition-colors bg-white border border-gray-300 rounded-lg dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder={t("contact.placeholder.message")}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {t(errors.message.message || "")}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center w-full px-6 py-3 space-x-2 font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white rounded-full border-t-transparent"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <span>{t("contact.form.sending")}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t("contact.form.send")}</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-8 bg-white border-2 border-gray-200 shadow-xl dark:bg-gray-800 rounded-2xl">
                <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  {t("contact.info.title")}
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      className="flex items-center p-4 space-x-4 transition-colors rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 group"
                      whileHover={{ x: 5 }}
                    >
                      <div
                        className={`p-3 rounded-full bg-gray-100 dark:bg-gray-700 ${info.color} group-hover:scale-110 transition-transform`}
                      >
                        <info.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {info.label}
                        </div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {info.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-white border-2 border-gray-200 shadow-xl dark:bg-gray-800 rounded-2xl">
                <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  {t("contact.social.title")}
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-400 ${social.color} transition-colors`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="p-8 text-white shadow-lg bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl">
                <h3 className="mb-4 text-2xl font-bold">
                  {t("contact.hours.title")}
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>{t("contact.hours.weekdays")}</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("contact.hours.saturday")}</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("contact.hours.sunday")}</span>
                    <span>{t("contact.hours.closed")}</span>
                  </div>
                </div>
                <div className="p-3 mt-4 rounded-lg bg-white/10">
                  <p className="text-sm">{t("contact.hours.note")}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
