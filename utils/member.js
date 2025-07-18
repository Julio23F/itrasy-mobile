//vérifie s’il existe au moins un follower dont l’id correspond à targetId
export const checkIfFollowedById = (item, targetId) => {
return item.followers?.some(follower => follower.id === targetId) ?? false;
};