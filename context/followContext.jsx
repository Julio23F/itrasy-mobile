// context/followContext.js

import React, { createContext, useContext, useEffect, useState } from 'react';
import { getFollowingUsers, getFollowersUsers } from '../services/followServices';
import { useSession } from "./authContext";

const FollowContext = createContext();

export const FollowProvider = ({ children }) => {
  const { user } = useSession();

  const [following, setFollowing] = useState([]);
  const [followers, setFollowers] = useState([]);
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

  const fetchFollowersUsers = async () => {
    try {
      setLoading(true);
      const data = await getFollowersUsers();
      if (data) {
        setFollowers(data);
      }
    } catch (err) {
      console.error("Erreur dans fetchFollowersUsers", err);
    } finally {
      setLoading(false);
    }
  };

  const refreshFollowData = async () => {
    await Promise.all([fetchFollowersUsers(), fetchFollowingUsers()]);
  };

  // Initial fetch on mount
  useEffect(() => {
    refreshFollowData();
  }, []);

  return (
    <FollowContext.Provider 
      value={{ 
        following, 
        setFollowing, 
        fetchFollowingUsers, 
        
        followers,
        setFollowers,
        fetchFollowersUsers,

        refreshFollowData,
        loading,
      }}
    >
      {children}
    </FollowContext.Provider>
  );
};

export const useFollow = () => useContext(FollowContext);
