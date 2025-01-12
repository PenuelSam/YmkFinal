import { Index } from "../../component/nav"
import { Images } from "./Images"
import { Videos } from "./Videos"


function WorkPage() {
  return (
    <div className="overflow-hidden">
      <Index />
      <Videos />
      <Images />
    </div>
  )
}

export default WorkPage
