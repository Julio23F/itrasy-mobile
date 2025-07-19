import React, { createContext, useContext, useEffect, useState } from 'react';
import { getFollowingUsers } from '../services/followServices';

const FollowContext = createContext();

export const FollowProvider = ({ children }) => {
  const [following, setFollowing] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFollowingUsers = async () => {
    try {
      setLoading(true);
      const data = await getFollowingUsers();
      if (data) {
        setFollowing(data);
      }
    } catch (err) {
      console.error("Erreur dans fetchFollowingUsers", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFollowingUsers();
  }, []);

  return (
    <FollowContext.Provider value={{ following, setFollowing, fetchFollowingUsers, loading }}>
      {children}
    </FollowContext.Provider>
  );
};

export const useFollow = () => useContext(FollowContext);
