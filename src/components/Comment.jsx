import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>

      <Avatar
        hasBorder={false}
        src="https://github.com/Edlavio.png" 
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>

          <header>
            <div className={styles.authorAndTime}>
              <strong>Pedro Alberto</strong>
              <time title="08 de Março de 2023" dateTime="2023-03-08 12:39:35">
                Cerca de 2h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Nossa adorei amigo! Parabéns</p>
        </div>

        <footer>
            <button>
              <ThumbsUp />
              Aplaudir <span>20</span>
            </button>
          </footer>
      </div>
    </div>
  );
}
