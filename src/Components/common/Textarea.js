import Block from "./Block";
import React from "react";

const Textarea = (props) => {
  return(
      <Block stylees={`${props.stylees} flex big-input`}>
          <label htmlFor="loginChat" className="textarea-label">
              <span>{props.label}</span>
              <textarea name="loginChat" cols="1" rows="3"
                        defaultValue={`https://t.me/jackk_man
                        \nhttps://t.me/jackk_man
                        \nhttps://t.me/jackk_man`}>
              </textarea>
          </label>
          {props.children}
      </Block>
  )
}

export default Textarea