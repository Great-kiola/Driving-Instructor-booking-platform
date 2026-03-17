export const generateAvatar = (seed, role) => {
  const baseUrl = "https://api.dicebear.com/7.x";

  const style = role === "instructor" ? "initials" : "thumbs";

  return `${baseUrl}/${style}/svg?seed=${encodeURIComponent(seed)}&size=48&radius=50`;
};