import { useState } from "react"
import Decrypt from "./component/Decrypt/Decrypt"
import Encrypt from "./component/Encrypt/Encrypt"

function App() {
  const [choice, setChoice] = useState<"decrypt" | "encrypt">("decrypt")
  return (
    <div className="h-screen w-full flex flex-col">
      <div className='bg-blue-700 h-20'>
        <p className='text-3xl mt-5 ml-4 text-white'>
          Enc_Dec
        </p>
      </div>
      <div className='bg-slate-300 flex-grow'>
        <p className='mt-12 ml-4 text-center text-5xl'>
          Encrypt and Decrypt with AES
        </p>
        <p className='mt-12 ml-4 text-center text-2xl'>
          Fill in the values below and press sync to update the output
        </p>
        <div className="inline-flex justify-center w-full mt-10 content-center">
          <ChecboxWithLabel
            label="Decrypt"
            checked={choice === "decrypt"}
            onChange={() => setChoice("decrypt")}
          />
          <ChecboxWithLabel
            label="Encrypt"
            checked={choice === "encrypt"}
            onChange={() => setChoice("encrypt")}
          />
        </div>
        <div className="w-full flex justify-center mt-5">
          {choice === "decrypt" ?
            <Decrypt />
            :
            <Encrypt />
          }
        </div>
        <div className="w-full flex justify-center mt-7">
          <p>
            *All operations are done locally on your computer securely
          </p>
        </div>
      </div>
    </div>
  )
}

type CheckboWithLabelProps = {
  label: string
  onChange: () => void,
  checked: boolean
}

const ChecboxWithLabel = (props: CheckboWithLabelProps) => {
  return (
    <div className="mx-2">
      <input
        type="radio"
        className="w-5 h-5 align-center"
        checked={props.checked}
        onChange={props.onChange}
      />
      <label className="inline-block text-2xl ml-2">
        {props.label}
      </label>
    </div>
  )
}

export default App
