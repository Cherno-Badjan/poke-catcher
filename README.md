# poke-catcher
1. Display 3 pokemon images on load (3 unique pokemon images. Will need a randomizer to generate the three unique random pokemons)
2. Use a while lop to ensure the none of the random pokemons generated are the same.  
3. If the a pokemon has been seen before,get it from localStorage and  increase 'seen' counter by 1. (getItem() function).
- Else initialize with seen 1 and caught 0.  (setItem() function).
4. On click,
-Increase the 'caught' property of the clicked pokemon by 1.
-User is allowed 10 tries. Once done, redirect to results page. (window.location)
-Else, load 3 more pokemons and repeat.
5. Results Page: Need to clear localStorage on refresh and keep it empty for the next user. 
