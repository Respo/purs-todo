module Main where

import Prelude
import Effect (Effect)
import Effect.Console (log)
import Effect.Ref as Ref
import Todo.GlobalData (namedMemo)
import Data.Array as Array

globalContentRef :: Ref.Ref { tasks :: Array String }
globalContentRef = namedMemo "global-content" { tasks: [] }

init :: Effect Unit
init = do
  content <- Ref.read globalContentRef
  log $ "content:" <> (show content)
  log "TODO"

onreload :: Effect Unit
onreload = do
  content <- Ref.read globalContentRef
  Ref.write (content { tasks = (Array.cons "Demo" content.tasks) }) globalContentRef
  log $ "content: " <> (show content)
  log "reload 2"
