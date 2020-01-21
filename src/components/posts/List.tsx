import React, { useState, useEffect, useContext, createContext } from "react";
import isSameDay from "date-fns/isSameDay";
import styled from "styled-components";
import { FirebaseContext, db } from "../auth/config";
import { signOut } from "../auth/Auth";
import Button from "../Button";
import ListItem from "./ListItem";
import Add from "./Add";
import Loading from "../Loading";

export type TPost = {
  createdAt: {
    seconds: string;
  };
};

export type TContext = {
  loading: boolean;
  setLoading: (show: boolean) => void;
};

export const LoadingContext = createContext<TContext>({
  loading: false,
  setLoading: () => {}
});

// 日付の表示は１回だけ
function shouldShowDate(previous: TPost, current: TPost) {
  if (!previous) {
    return true;
  }
  const isNewDay = !isSameDay(
    parseInt(previous.createdAt.seconds, 10) * 1000,
    parseInt(current.createdAt.seconds, 10) * 1000
  );
  return isNewDay;
}

const List: React.FC = () => {
  const { userId } = useContext(FirebaseContext);
  const [posts, setPosts] = useState<TPost[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const docs: TPost[] = [];
      const user = db.collection("users").doc(userId!);
      await db
        .collection("records")
        .where("user", "==", user)
        .orderBy("createdAt", "desc")
        .limit(10)
        .get()
        .then(list => {
          list.forEach(doc => {
            docs.push(doc.data() as TPost);
          });
        });
      setPosts(docs);
    })();
  }, [userId]);

  const addPost = (post: TPost) => {
    setPosts([post, ...posts].slice(0, 10));
  };

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <Add onClick={addPost} />
      <StyledSignout text="ログアウト" onClick={signOut} />
      <StyledListWrap>
        <StyledList>
          {posts.map((post, i) => {
            const previous = posts[i - 1];
            const showDate = shouldShowDate(previous, post);
            return (
              <ListItem key={i} date={post.createdAt} showDate={showDate} />
            );
          })}
        </StyledList>
      </StyledListWrap>
      {loading ? <Loading /> : null}
    </LoadingContext.Provider>
  );
};

const StyledListWrap = styled.div`
  margin-top: 20px;
  background: #fff;
  border-radius: 6px;
  padding: 20px;
`;

const StyledList = styled.ul`
  margin-top: -30px;
  list-style: none;
`;

const StyledSignout = styled(Button)`
  margin: 10px auto 0;
  -webkit-appearance: none;
  background: transparent;
  border: none;
  display: block;
  font-size: 12px;
`;

export default List;
