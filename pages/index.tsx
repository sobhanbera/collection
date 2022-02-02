import Button from '../components/button'
import Input from '../components/input'
import Slider from '../components/slider'
import Radio from '../components/radio'
import CheckBox from '../components/checkbox'
type Props = {}
export default function Home({}: Props) {
    return (
        <div className="dark">
            <CheckBox id="chk1">Apple</CheckBox>
            <CheckBox id="chk1">kappa</CheckBox>
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
