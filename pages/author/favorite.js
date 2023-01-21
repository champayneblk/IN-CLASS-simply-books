/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { favAuthors } from '../../api/authorData';
import AuthorCard from '../../components/AuthorCard';
import { useAuth } from '../../utils/context/authContext';

export default function favoriteAuthor() {
  const { user } = useAuth();
  const [favAuth, setFavAuth] = useState([]);

  const getFavAuthors = () => {
    favAuthors(user.uid).then(setFavAuth);
  };

  useEffect(() => {
    getFavAuthors();
  }, []);

  return (
    <div>{favAuth.map((author) => (<AuthorCard key={author.firebaseKey} authorObj={author} onUpdate={getFavAuthors} />
    ))}
    </div>
  );
}
