import Button from '../components/button'
import Input from '../components/input'

type Props = {}
export default function Home({}: Props) {
    return (
        <div>
            <Button>Title</Button>
            <Input placeholder="Enter name" name="name" type="text" />
        </div>
    )
}
