import EditPinForm from "../../../components/Dashboard/EditPinForm";
import EditProfileForm from "../../../components/Dashboard/EditProfileForm";

const Settings = () => {
  return (
    <section className="px-6 mb-8 w-full md:max-w-[670px] lg:max-w-[770px] xl:max-w-[900px] mx-auto">
      <div className="">
        <h2 className="text-darker px-6 py-3 border-x border-t border-borderColor bg-borderColor/30 md:text-lg font-inter tracking-wide font-medium rounded-t-md">
          Manage Profile
        </h2>

        <div className="mt- px-6 py-4 md:py-6 border-x border-b border-borderColor shadow-custo rounded-b-lg ">
          <EditProfileForm />
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-darker px-6 py-3 border-x border-t border-borderColor bg-borderColor/30 md:text-lg font-inter tracking-wide font-medium rounded-t-md">
          Manage pin & password
        </h2>

        <div className="mt- px-6 py-4 md:py-6 border-x border-b border-borderColor shadow-custo rounded-b-lg ">
          <EditPinForm />
        </div>
      </div>
    </section>
  );
};

export default Settings;
