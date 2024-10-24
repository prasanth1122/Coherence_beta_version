import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Create the Navigation Context
const NavigationContext = createContext();

// Create a provider component
export function NavigationProvider({ children }) {
  const navigate = useNavigate();

  // Use sessionStorage instead of localStorage
  const [isSubscribe, setIsSubscribe] = useState(() => {
    const storedIsSubscribe = sessionStorage.getItem("isSubscribe");
    return storedIsSubscribe === "true" || false; // Default to false
  });

  const [isRegister, setIsRegister] = useState(() => {
    const storedIsRegister = sessionStorage.getItem("isRegister");
    return storedIsRegister === "true" || false; // Default to false
  });

  const [isProfileOpen, setIsProfileOpen] = useState(() => {
    const storedIsProfileOpen = sessionStorage.getItem("isProfileOpen");
    return storedIsProfileOpen === "true" || false; // Default to false
  });

  const [isPreference, setIsPreference] = useState(() => {
    const storedIsPreference = sessionStorage.getItem("isPreference");
    return storedIsPreference === "true" || false; // Default to false
  });

  // Navigation handler function
  const handleNavigation = (path) => {
    navigate(path);
  };

  // Action to update isSubscribe and persist to sessionStorage
  const handleSubscribe = () => {
    setIsSubscribe(true);
  };

  // Action to update isRegister and persist to sessionStorage
  const handleRegister = () => {
    setIsRegister(true);
  };

  const handleProfileOpen = () => {
    setIsProfileOpen(true);
  };

  const handleProfileClose = () => {
    setIsProfileOpen(false);
  };

  const handlePreferenceOpen = () => {
    setIsPreference(true);
  };

  const handlePreferenceClose = () => {
    setIsPreference(false);
  };

  // Save to sessionStorage whenever the state changes
  useEffect(() => {
    sessionStorage.setItem("isSubscribe", isSubscribe);
  }, [isSubscribe]);

  useEffect(() => {
    sessionStorage.setItem("isRegister", isRegister);
  }, [isRegister]);

  useEffect(() => {
    sessionStorage.setItem("isProfileOpen", isProfileOpen);
  }, [isProfileOpen]);

  useEffect(() => {
    sessionStorage.setItem("isPreference", isPreference);
  }, [isPreference]);

  return (
    <NavigationContext.Provider
      value={{
        handleNavigation,
        isSubscribe,
        handleSubscribe,
        isRegister,
        handleRegister,
        isProfileOpen,
        handleProfileOpen,
        handleProfileClose,
        isPreference,
        handlePreferenceOpen,
        handlePreferenceClose,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

// Custom hook for consuming the navigation context
export function useNavigation() {
  return useContext(NavigationContext);
}

