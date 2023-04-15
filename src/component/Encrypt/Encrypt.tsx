import { useState } from "react";
import addIcon from '../../assets/add.svg';
import copyIcon from '../../assets/copy.svg';
import descriptionIcon from '../../assets/description.svg';
import keyIcon from '../../assets/key.svg';
import mailLockIcon from '../../assets/mail_lock.svg';
import rightIcon from '../../assets/right.svg';
import syncIcon from '../../assets/sync.svg';
import { encryptMessage } from "../../service/crypt";
import Column from "../Column/Column";


export default function Encrypt() {
    const [message, setMessage] = useState("");
    const [key, setKey] = useState("");
    const [cipher, setCipher] = useState<null | string>(null)
    return (
        <div className="w-full max-w-7xl flex flex-row">
            <Column title="Message" iconAlt="Message" iconSource={descriptionIcon} flexGrow>
                <input
                    className="w-40 m-0"
                    onChange={e => setMessage(e.target.value)}
                    value={message}
                />
            </Column>

            <Column iconAlt="Add" iconSource={addIcon} />
            <Column title="Password" iconAlt="Password" iconSource={keyIcon} flexGrow >
                <input
                    className="w-40 m-0"
                    onChange={e => setKey(e.target.value)}
                    value={key}
                />
            </Column>
            <Column iconAlt="Right" iconSource={rightIcon} />

            <Column title="Cipher" iconAlt="Cipher" iconSource={mailLockIcon} flexGrow>
                <div className="w-40 flex">
                    <p className="bg-white w-32 mr-2 truncate">
                        {cipher === null || cipher.length === 0 ?
                            <i>Fill in values</i>
                            : cipher}
                    </p>
                    <button
                        onClick={() => {
                            setCipher(encryptMessage(message, key))
                        }}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold p-1 rounded mr-2">
                        <img src={syncIcon} alt="Sync" className="w-4" />
                    </button>
                    <button
                        onClick={() => {
                            if (typeof cipher === "string") {
                                navigator.clipboard.writeText(cipher);
                            }
                        }}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded ">
                        <img src={copyIcon} alt="Copy" className="w-4" />
                    </button>
                </div>
            </Column>
        </div >
    )
}