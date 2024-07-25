import { Layout } from "../../components";

const ListPage = () => {
  return (
    <Layout>
      <div className="bg-[#FFE7E3] p-10 px-28">
        <div className="flex justify-between">
          <div className="mt-7">
            <div className="font-bold text-3xl">My Property List</div>
            <div className="text-lg">Manage Property List</div>
          </div>

          <div>
            <img
              src="/icon_dasdasdsadas-removebg-preview.png"
              alt=""
              className="w-36"
            />
          </div>
        </div>
      </div>

      <div className="p-10 px-28">
        {/* button */}
        <div>
          <button className="btn px-10 btn-outline bg-[#f7f7f7] mt-7 mr-5">
            Sort By..
          </button>
          <button className="btn px-10 btn-outline bg-[#f7f7f7] mt-7">
            Select
          </button>
        </div>

        <div className="overflow-x-auto mt-9">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Property</th>
                <th>Category</th>
                <th>Status</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask h-32 w-36 rounded-md">
                        <img
                          src="/house1.jpg"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Bunglow SemiD</div>
                      <div className="text-sm opacity-50">Kajang, Selangor</div>
                      <div className="text-sm opacity-50">
                        Posted on 19-08-2024
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  House, Sales
                  <br />
                </td>
                <td className="text-green-400">Approved</td>
                <td className="font-semibold">RM 600,000</td>
                <td>
                  <button class="btn px-10 btn-outline bg-[#fdfdfd] ">
                    Action
                  </button>
                </td>
              </tr>

              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask h-32 w-36 rounded-md">
                        <img
                          src="/house8.jpg"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Bunglow SemiD</div>
                      <div className="text-sm opacity-50">Kajang, Selangor</div>
                      <div className="text-sm opacity-50">
                        Posted on 19-08-2024
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  House, Sales
                  <br />
                </td>
                <td className="text-yellow-400 font-bold">Pending</td>
                <td className="font-semibold">RM 600,000</td>
                <td>
                  <button class="btn px-10 btn-outline bg-[#fdfdfd] ">
                    Action
                  </button>
                </td>
              </tr>

              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask h-32 w-36 rounded-md">
                        <img
                          src="/house3.jpg"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Bunglow SemiD</div>
                      <div className="text-sm opacity-50">Kajang, Selangor</div>
                      <div className="text-sm opacity-50">
                        Posted on 19-08-2024
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  House, Sales
                  <br />
                </td>
                <td className="text-green-400 font-bold">Approved</td>
                <td className="font-semibold">RM 600,000</td>
                <td>
                  <button class="btn px-10 btn-outline bg-[#fdfdfd] ">
                    Action
                  </button>
                </td>
              </tr>

              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask h-32 w-36 rounded-md">
                        <img
                          src="/house4.jpg"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Bunglow SemiD</div>
                      <div className="text-sm opacity-50">Kajang, Selangor</div>
                      <div className="text-sm opacity-50">
                        Posted on 19-08-2024
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  House, Sales
                  <br />
                </td>
                <td className="text-red-400 font-bold">Rejected</td>
                <td className="font-semibold">RM 600,000</td>
                <td>
                  <button className="btn px-10 btn-outline bg-[#fdfdfd] ">
                    Action
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default ListPage;
