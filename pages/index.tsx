import Button from '../components/button'
import Input from '../components/input'
import Slider from '../components/slider'
type Props = {}
export default function Home({}: Props) {
    return (
        <div className="dark">
            <Slider min={0} max={100} />
            <Button>Title</Button>
            <Input placeholder="Enter name" name="name" type="text" />
        </div>
    )
}
