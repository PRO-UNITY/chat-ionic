import { IonAvatar, IonCard, IonText } from "@ionic/react";

const StoryAvatar = () => {
  return (
    <>
      <IonCard>
        <IonAvatar>
          <img
            alt="Silhouette of a person's head"
            src="https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp"
          />
        </IonAvatar>
        <IonText className="ion-text-center">Terry</IonText>
      </IonCard>
    </>
  );
};

export default StoryAvatar;
