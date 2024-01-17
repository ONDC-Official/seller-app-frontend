import React, { useEffect } from "react"
import MDEditor, {
  bold,
  commands,
  hr,
  italic,
  orderedListCommand,
  strikethrough,
  unorderedListCommand
} from "@uiw/react-md-editor"

import Loader from "../../../Assets/Images/LoaderSpinner.svg"
import DeleteIcon from "../../../Assets/Images/deleteIcon.svg"
import EditIcon from "../../../Assets/Images/editImage.svg"

const TextBodyModal = ({
  listening,
  aiInput,
  setAiInput,
  item,
  aiInputResponse,
  aiLoading,
  removeImage,
  editImage,
  isImageEdit,
  editImageInputValue,
  setEditImageInputValue,
  markdownValue,
  setMarkdownValue,
  setAiInputResponse
}) => {
  const changeHandler = (event) => {
    setAiInput({
      id: item.id,
      value: event.target.value
    })
  }

  useEffect(() => {
    if (markdownValue?.length > 0) {
      setAiInputResponse(markdownValue)
    }
  }, [markdownValue])

  return (
    <div className="text-body-modal">
      <>
        {!isImageEdit ? (
          <>
            {!listening && aiInputResponse.length === 0 ? (
              <>
                <textarea
                  placeholder="Text or Speech"
                  value={aiInput.value}
                  onChange={changeHandler}
                  className="speech-modal-textarea"
                  disabled={aiLoading}
                ></textarea>
                {aiLoading && (
                  <>
                    <span className="loader"></span>
                  </>
                )}
              </>
            ) : (
              <>
                {listening ? (
                  <img
                    src={Loader}
                    alt="loader"
                    width="80"
                    className="chat-loader"
                  />
                ) : (
                  <>
                    {item.id !== "images" ? (
                      <>
                        <div className="response text-black">
                          {item.type === "input-desc" ? (
                            <div data-color-mode="light">
                              <MDEditor
                                hideToolbar={false}
                                value={markdownValue}
                                onChange={setMarkdownValue}
                                preview="edit"
                                height={380}
                                commands={[
                                  bold,
                                  italic,
                                  strikethrough,
                                  hr,
                                  commands.divider,
                                  unorderedListCommand,
                                  orderedListCommand
                                ]}
                              />
                            </div>
                          ) : (
                            aiInputResponse
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="show-image">
                          <img
                            src={aiInputResponse.url}
                            alt=""
                            className="w-full h-full"
                          />
                          <div className="remove-button" onClick={removeImage}>
                            <img src={DeleteIcon} alt="delete icon" />
                          </div>
                          <div className="edit-button" onClick={editImage}>
                            <img src={EditIcon} alt="edit icon" />
                          </div>
                        </div>
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </>
        ) : (
          <>
            <div className="edit-image">
              <img
                src={aiInputResponse.url}
                className="response-image"
                alt=""
              />
              <div className="edit-textarea">
                {aiLoading && (
                  <>
                    <span className="loader"></span>
                  </>
                )}
                {listening ? (
                  <div className="edit-loader">
                    <img
                      src={Loader}
                      alt="loader"
                      width="80"
                      className="chat-loader"
                    />
                  </div>
                ) : (
                  <textarea
                    placeholder="Text or Speech"
                    value={editImageInputValue}
                    onChange={(event) =>
                      setEditImageInputValue(event.target.value)
                    }
                    disabled={aiLoading}
                  ></textarea>
                )}
              </div>
            </div>
          </>
        )}
      </>
    </div>
  )
}

export default TextBodyModal
