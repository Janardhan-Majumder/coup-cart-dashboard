import { useGetTotalCountsQuery } from "../redux/features/dashboard/dashboardApi";

export default function DashboardAllCount() {
  const { data } = useGetTotalCountsQuery();
  // console.log(data?.data?.analytics);

  return (
    <>
      <div className="grid grid-cols-12 gap-x-[22px]">
        <div className="col-span-3 bg-playground px-[24px] py-[16px] rounded-2xl space-y-3">
          <h3 className="text-[20px]">{"Total Earnings"}</h3>
          <h3 className="text-[30px] font-medium text-[#1F8D84]">
            $ {data?.data?.analytics?.totalearnings}
          </h3>
        </div>
        <div className="col-span-3 bg-playground px-[24px] py-[16px] rounded-2xl space-y-3">
          <h3 className="text-[20px]">{"Total Users"}</h3>
          <h3 className="text-[30px] font-medium text-[#1F8D84]">
            {data?.data?.analytics?.totalusers}
          </h3>
        </div>
        <div className="col-span-3 bg-playground px-[24px] py-[16px] rounded-2xl space-y-3">
          <h3 className="text-[20px]">{"Total Subscriber"}</h3>
          <h3 className="text-[30px] font-medium text-[#1F8D84]">
            {data?.data?.analytics?.totalsubscribers}
          </h3>
        </div>
        <div className="col-span-3 bg-playground px-[24px] py-[16px] rounded-2xl space-y-3">
          <h3 className="text-[20px]">{"Total Redeem"}</h3>
          <h3 className="text-[30px] font-medium text-[#1F8D84]">
            {data?.data?.analytics?.totalredeem}
          </h3>
        </div>
      </div>
    </>
  );
}
