import { ITextAdventure } from "./adventure";

/**
 * A {@link IRoom} represents a location within a {@link ITextAdventure}.
 */
export interface IRoom {

    /**
     * Returns the name of this <c>Room</c>. This method accepts a
     * {@link ITextAdventure} as a parameter which can be used to change the name
     * depending on the state of the game. of the screen when the player enters
     * the {@link IRoom}. The return value must not be null.
     *
     * @param adventure The {@link ITextAdventure} that is being played.
     * @return The name of this Room
     */
    getName(adventure: ITextAdventure): string;

    /**
     * Given a {@link ITextAdventure}, returns a description of this room. This
     * method accepts a {@link ITextAdventure} as a parameter which can be used
     * to change the description depending on the state of the game. This is
     * drawn to the screen when the player first enters the room. This must not
     * be null.
     *
     * @param adventure The {@link ITextAdventure} that is being played.
     * @return The description of this Room
     */
    getDescription(adventure: ITextAdventure): string;

    /**
     * This method is used to handle user input and interaction within a Room.
     * It accepts a {@link TextAdventure} as an argument which can be used to
     * manage the state of the adventure.
     *
     * @param adventure The {@link ITextAdventure} that is being played.
     * @return The room that the player should be in next
     */
    handleInput(adventure: ITextAdventure): Promise<IRoom>;

}