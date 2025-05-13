// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://whuthpfkhtqanlwjkqqe.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndodXRocGZraHRxYW5sd2prcXFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MzU1ODMsImV4cCI6MjA2MjExMTU4M30.MkVW2cW2YKDX2aQIf-mlWhJeP2Ollh6aNugQmRlIn9Y'
)