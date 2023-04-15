import { useState } from "react";
import addIcon from '../../assets/add.svg';
import copyIcon from '../../assets/copy.svg';
import descriptionIcon from '../../assets/description.svg';
import keyIcon from '../../assets/key.svg';
import mailLockIcon from '../../assets/mail_lock.svg';
import rightIcon from '../../assets/right.svg';
import syncIcon from '../../assets/sync.svg';
import { decryptMessage } from "../../service/crypt";
import Column from "../Column/Column";
export default function Decrypt() {
    const [cipher, setCipher] = useState("");
    const [key, setKey] = useState("");
    const [message, setMessage] = useState<string | null>(null)
    return (
        <div className="w-full max-w-7xl flex flex-row">
            <Column title="Cipher" iconAlt="Cipher" iconSource={mailLockIcon} flexGrow>
                <input
                    className="w-40 m-0"
                    onChange={e => setCipher(e.target.value)}
                    value={cipher}
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
            <Column title="Message" iconAlt="Message" iconSource={descriptionIcon} flexGrow>
                <div className="w-40 flex">
                    <p className="bg-white w-24 mr-2 truncate">
                        {message === null || message.length === 0 ?
                            <i>Empty</i>
                            : message}
                    </p>
                    <button
                        onClick={() => {
                            setMessage(decryptMessage(cipher, key))
                        }}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold p-1 rounded mr-2">
                        <img src={syncIcon} alt="Sync" className="w-4" />
                    </button>
                    <button
                        onClick={() => {
                            if (typeof message === "string") {
                                navigator.clipboard.writeText(message);
                            }
                        }}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded ">
                        <img src={copyIcon} alt="Copy" className="w-4" />
                    </button>

                </div>
            </Column>
        </div>
    )
}


