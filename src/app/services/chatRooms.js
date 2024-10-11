import {
  onSnapshot,
  collection,
  orderBy,
  addDoc,
  query,
  doc,
} from "firebase/firestore";

import { firestoreDb } from "@/app/utils/firebase";

const listenMessagesByChatRoomId = ({ chatRoomId = "", onUpdate } = {}) => {
  const selectedChatRoomRef = doc(firestoreDb, `chatRooms/${chatRoomId}`);
  const messagesCollectionRef = collection(selectedChatRoomRef, "messages");

  const queryToGetMessages = query(
    messagesCollectionRef,
    orderBy("createdAt", "asc")
  );

  return onSnapshot(queryToGetMessages, onUpdate);
};

const addMessageToChatRoomById = ({ chatRoomId = "", data = {} } = {}) => {
  const selectedChatRoomRef = doc(firestoreDb, `chatRooms/${chatRoomId}`);
  const messagesCollectionRef = collection(selectedChatRoomRef, "messages");

  return addDoc(messagesCollectionRef, data);
};

export { listenMessagesByChatRoomId, addMessageToChatRoomById };
