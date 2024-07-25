import { Layout } from "../../components";

const Profile = () => {
  return (
    <Layout>
      <div className="px-40 py-36">
        <div className="text-4xl font-bold mb-20">My Profile</div>

        <div>
          <div className="text-3xl font-semibold text-gray-500 mb-16">
            Personal Details
          </div>
          <div className="mb-5">
            <p className="font-semibold mb-2">First Name</p>
            <input
              type="text"
              placeholder="First Name"
              className="input input-bordered w-full max-w-md border-2 border-black"
            />
          </div>

          <div className="mb-5">
            <p className="font-semibold mb-2">Last Name</p>
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered w-full max-w-md border-2 border-black"
            />
          </div>

          <div className="mb-5">
            <p className="font-semibold mb-2">Nationality</p>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-md border-2 border-black"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-20">
          <div className="grid-rows-5">
            <div className="text-3xl font-semibold text-gray-500 mb-16">
              Personal Details
            </div>
            <div className="mb-5">
              <p className="font-semibold mb-2">Street Address</p>
              <input
                type="text"
                placeholder="Street Address"
                className="input input-bordered w-full max-w-md border-2 border-black"
              />
            </div>
            <div className="mb-5">
              <p className="font-semibold mb-2">City</p>
              <input
                type="text"
                placeholder="City"
                className="input input-bordered w-full max-w-md border-2 border-black"
              />
            </div>
            <div className="mb-5">
              <p className="font-semibold mb-2">PostCode</p>
              <input
                type="text"
                placeholder="Postcode"
                className="input input-bordered w-full max-w-md border-2 border-black"
              />
            </div>
            <div className="mb-5">
              <p className="font-semibold mb-2">State</p>
              <input
                type="text"
                placeholder="State"
                className="input input-bordered w-full max-w-md border-2 border-black"
              />
            </div>
          </div>

          <div>
            <div className="grid-rows-3">
              <div className="text-3xl font-semibold text-gray-500 mb-16">
                Personal Details
              </div>
              <div className="mb-5">
                <p className="font-semibold mb-2">Mobile Number</p>
                <input
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered w-full max-w-md border-2 border-black"
                />
              </div>
              <div className="mb-5">
                <p className="font-semibold mb-2">Email</p>
                <input
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered w-full max-w-md border-2 border-black"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Button */}
        <div>
          <button className="btn bg-[#FF5A3C] px-14 text-lg text-white mt-8">
            Save Changes
          </button>
        </div>

        {/* Delete Account */}

        <div className="mt-20 grid grid-cols-3">
          <div>
            <p className="text-2xl">Delete Account</p>
            <p className="text-lg mt-2">
              Before Proceeding, please take note of the following :
            </p>
            <p className="mt-2">
              - All your saved data, including Shortlists, Enquiries, Saved
              Searches, and Hidden Listings, will be permanently lost across all
              your devices.
            </p>

            <p className="mt-2">
              - You cannot create a new account with the same email id.
            </p>

            <button className="btn px-14 btn-outline bg-[#F6F5F5] mt-7">
              Confirm & Delete Account
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
