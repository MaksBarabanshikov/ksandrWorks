import classNames from "classnames";

const Block = (props) => {
  return (
      <div className={classNames(`block ${props.stylees}`)}>
          {props.children}
      </div>
  )
}

export default Block