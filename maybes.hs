import Data.Maybe

f = \x -> if (x > 3) then Just(x + 1) else Nothing;
g = \y -> y >>= f >>= f


