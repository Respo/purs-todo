module Todo.GlobalData where

import Effect.Ref (Ref)
import Effect.Ref as Ref
import Effect.Unsafe (unsafePerformEffect)

foreign import globalOnceImpl :: forall a. String -> a -> a

-- | tell runtime to memorize the value based on the name during HMR
namedMemo :: forall a. String -> a -> Ref a
namedMemo name a = globalOnceImpl name (unsafePerformEffect (Ref.new a))
