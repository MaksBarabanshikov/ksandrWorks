import Textarea from "../../Components/common/Textarea";
import Button from "../../Components/common/Button";

const AddProxy = () => {
    return (
        <div className="setting-proxy">
            <Textarea label="Добавить прокси"/>
            <div className="setting-proxy-right">
                <div className="setting-proxy-buttons">
                    <div className="setting-proxy-btn">
                        <span>
                            Название списка
                        </span>
                        <Button>
                            Списки
                        </Button>
                    </div>
                    <div className="setting-proxy-btn">
                        <span>
                            Загрузить список
                        </span>
                        <Button>
                            Загрузить
                        </Button>
                    </div>
                </div>
                <span>
                    Вы можете добавить свои прокси через окно ввода или загрузку списка. В обоих случаях необходимо ввести название списка
                </span>
            </div>
        </div>
    )
}

export default AddProxy