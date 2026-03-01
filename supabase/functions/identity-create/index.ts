import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const body = await req.json();
    
    // Generate DID (Decentralized Identifier)
    const did = `did:tamv:${crypto.randomUUID()}`;
    
    // Generate public key (simplified for demo)
    const publicKey = crypto.randomUUID();
    
    // Generate recovery keys
    const recoveryKeys = [crypto.randomUUID(), crypto.randomUUID()];

    const { data, error } = await supabaseClient
      .from("identities")
      .insert({
        did,
        publicKey,
        recoveryKeys,
        sovereigntyLevel: body.sovereigntyLevel || "INDIVIDUAL",
        status: "ACTIVE",
        metadata: body.metadata || {},
        nodeId: body.nodeId,
      })
      .select()
      .single();

    if (error) {
      throw error;
    }

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          id: data.id,
          did: data.did,
          publicKey: data.publicKey,
          sovereigntyLevel: data.sovereigntyLevel,
          status: data.status,
          metadata: data.metadata,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
        },
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 201,
      }
    );
  } catch (error) {
    console.error("identity-create error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Error desconocido",
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
