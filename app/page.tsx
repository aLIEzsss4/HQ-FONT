import UserInfo from '#/ui/userInfo'
import DailyQuests from '#/ui/dailyQuests'
import Table from '#/ui/table'


export default function Home() {
  return (
    <main className="h-full bg-black w-full">
      <div className="w-[100vw] h-[100vh] flex justify-center items-center">
        <UserInfo />
        <div className="mx-3 flex flex-col">
          <DailyQuests />
          <Table />
        </div>
      </div>
    </main>

  )
}
