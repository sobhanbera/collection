import Button from '../components/button'
import Input from '../components/input'
import Slider from '../components/slider'
import Radio from '../components/radio'
type Props = {}
export default function Home({}: Props) {
    return (
        <div className="light">
            <Radio id="r1" name="same">
                First
            </Radio>
            <Radio id="r2" name="same">
                seco
            </Radio>
            <Radio id="r3" name="same">
                Third
            </Radio>
            <Slider min={0} max={100} />
            <Button>Title</Button>
            <Input placeholder="Enter name" name="name" type="text" />
        </div>
    )
}
