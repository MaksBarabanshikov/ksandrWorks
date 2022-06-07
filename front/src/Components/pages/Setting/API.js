import CompleteLogo from "../../../image/processWork/check_ring_round_light.svg"
import Button from "../../common/Button";

const API = () => {
    return (
        <div className="setting-api">
            <div className="setting-api-right">
                <div className="setting-api-hash">
                    <label>
                        <span>
                            Api Hash
                            <img src={CompleteLogo} alt=""/>
                        </span>
                        <input name="apiHash" type="text"/>
                    </label>
                </div>
                <div className="setting-api-id">
                    <label>
                        <span>
                            Api ID
                        </span>
                        <input name="apiId" type="text"/>
                    </label>
                </div>
            </div>
            <div className="setting-api-left">
                <span>
                    Данный API Hash и API ID необходимо взять на официальном сайте Telegram
                </span>
                <Button>
                    Ссылка
                </Button>
                <a href="front/src/Components/pages/Setting/API#" >
                    Инструкция
                </a>
            </div>
        </div>
    )
}

export default API