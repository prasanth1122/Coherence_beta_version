// NavigationContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Create the Navigation Context
const NavigationContext = createContext();

// Create a provider component
export function NavigationProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

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

  // New state for storing preferences
  const [myPreferences, setMyPreferences] = useState(() => {
    const storedPreferences = sessionStorage.getItem("myPreferences");
    return storedPreferences ? JSON.parse(storedPreferences) : [];
  });

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleSubscribe = () => {
    setIsSubscribe(true);
  };

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
    if (location.pathname === "/registration") {
      navigate("/home");
      setIsPreference(false);
    }
    setIsPreference(false);
  };

  // Function to add a new preference
  const handleAddPreference = (newPreference) => {
    setMyPreferences((prevPreferences) => {
      // Convert all preferences to lowercase for case-insensitive comparison
      const lowerCasePreferences = prevPreferences.map((preference) =>
        preference.toLowerCase()
      );

      if (lowerCasePreferences.includes(newPreference.toLowerCase())) {
        alert(`${newPreference} is already added`);
        return prevPreferences;
      }

      const updatedPreferences = [...prevPreferences, newPreference];
      sessionStorage.setItem(
        "myPreferences",
        JSON.stringify(updatedPreferences)
      );
      return updatedPreferences;
    });
  };
  const handleRemovePreference = (preferenceToRemove) => {
    setMyPreferences((prevPreferences) => {
      const updatedPreferences = prevPreferences.filter(
        (preference) => preference !== preferenceToRemove
      );
      sessionStorage.setItem(
        "myPreferences",
        JSON.stringify(updatedPreferences)
      );
      return updatedPreferences;
    });
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

  useEffect(() => {
    sessionStorage.setItem("myPreferences", JSON.stringify(myPreferences));
  }, [myPreferences]);

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
        myPreferences,
        handleAddPreference,
        handleRemovePreference,
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
