import classes from "../css/modal.module.css";
import bingoContext from "../store/bingoContext";
import {
  useContext,
  useRef,
  useState,
  useEffect,
  type BaseSyntheticEvent,
} from "react";
import { isValidMimeType } from "../util/util";
import { type BookType } from "../store/bingoContext";

interface BookDetailsProps {
  index: number;
  isEditable: boolean;
  array: BookType[];
}

export default function BookDetails({
  index,
  isEditable,
  array,
}: BookDetailsProps) {
  const ctx = useContext(bingoContext);
  const card = array[index];

  const fileInputRef = useRef<null | HTMLInputElement>(null);
  const formRef = useRef<null | HTMLFormElement>(null);

  const [file, setFile] = useState<undefined | File>(undefined);
  const [imgUrl, setImgUrl] = useState(card.image);

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImgUrl(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  function handleSubmit() {
    const formData = new FormData(formRef.current!);
    const data = Object.fromEntries(formData.entries());

    data.image = imgUrl;

    const newBook: BookType = {
      author: data.author as string,
      title: data.title as string,
      image: data.image as string,
      readStatus: card.readStatus || 0,
      emoji: card.emoji || [],
      desc: data.notes as string,
    };

    ctx.updateBookList(index, newBook);
    ctx.setShowModal(false);
  }

  function handleDelete() {
    const newBook: BookType = {
      author: "",
      title: "",
      image: "",
      readStatus: 0,
      emoji: [],
      desc: "",
    };
    ctx.updateBookList(index, newBook);
    ctx.setShowModal(false);
  }

  function handleFileSend(event: BaseSyntheticEvent) {
    let pickedFile: File;

    if (event.target.files && event.target.files.length == 1) {
      pickedFile = event.target.files[0];
      if (!isValidMimeType(pickedFile)) {
        alert("Not a valid image");
        return;
      }

      setFile(pickedFile);
    } else {
      setFile(undefined);
    }
  }

  return (
    <>
      <form ref={formRef}>
        <label htmlFor="title">Title:</label>
        <div className={classes.plainText} hidden={isEditable}>
          {card.title}
        </div>
        <input
          id="title"
          name="title"
          defaultValue={card.title}
          hidden={!isEditable}
        ></input>

        <label htmlFor="author">Author:</label>
        <div className={classes.plainText} hidden={isEditable}>
          {card.author}
        </div>
        <input
          id="author"
          name="author"
          defaultValue={card.author}
          hidden={!isEditable}
        ></input>

        <label>Cover: </label>
        <img
          className={classes.cover}
          src={imgUrl ? imgUrl : "https://placehold.co/75x75/ccc/ccc"}
          onClick={() => {
            fileInputRef.current!.click();
          }}
        ></img>

        <label htmlFor="notes" hidden={!isEditable && !card.desc}>
          Notes:
        </label>
        <textarea
          id="notes"
          name="notes"
          hidden={!isEditable}
          defaultValue={card.desc}
        ></textarea>
        <div
          className={classes.plainText}
          hidden={isEditable || (!isEditable && !card.desc)}
        >
          {card.desc}
        </div>
        <input
          type="file"
          hidden
          ref={fileInputRef}
          accept=".jpg, .png, .jpeg, .webp, .gif"
          onChange={handleFileSend}
          disabled={!isEditable}
        ></input>
      </form>
      {isEditable && (
        <div className={classes.center}>
          <button type="submit" onClick={handleSubmit}>
            Add
          </button>
          <button className={classes.delete} onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
    </>
  );
}
