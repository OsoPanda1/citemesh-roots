import { supabase } from "@/integrations/supabase/client";

// ==================== Identity APIs ====================
export const identityApi = {
  create: async (data: any) => {
    const response = await supabase.functions.invoke('identity-create', {
      body: data,
    });
    return response;
  },
  getById: async (did: string) => {
    const response = await supabase.functions.invoke('identity-get', {
      body: { did },
    });
    return response;
  },
  verify: async (data: any) => {
    const response = await supabase.functions.invoke('identity-verify', {
      body: data,
    });
    return response;
  },
  rotateKeys: async (did: string) => {
    const response = await supabase.functions.invoke('identity-rotate', {
      body: { did },
    });
    return response;
  },
  revoke: async (did: string) => {
    const response = await supabase.functions.invoke('identity-revoke', {
      body: { did },
    });
    return response;
  },
};

// ==================== Education APIs ====================
export const educationApi = {
  createCourse: async (data: any) => {
    const response = await supabase.functions.invoke('edu-course-create', {
      body: data,
    });
    return response;
  },
  listCourses: async (filters: any) => {
    const response = await supabase.functions.invoke('edu-courses-list', {
      body: filters,
    });
    return response;
  },
  enroll: async (data: any) => {
    const response = await supabase.functions.invoke('edu-enroll', {
      body: data,
    });
    return response;
  },
  getProgress: async (studentId: string) => {
    const response = await supabase.functions.invoke('edu-progress-get', {
      body: { studentId },
    });
    return response;
  },
  issueCertificate: async (data: any) => {
    const response = await supabase.functions.invoke('edu-certificate-issue', {
      body: data,
    });
    return response;
  },
};

// ==================== Security APIs ====================
export const securityApi = {
  audit: async (data: any) => {
    const response = await supabase.functions.invoke('security-audit', {
      body: data,
    });
    return response;
  },
  getAlerts: async () => {
    const response = await supabase.functions.invoke('security-alerts-get');
    return response;
  },
  scan: async (data: any) => {
    const response = await supabase.functions.invoke('security-scan', {
      body: data,
    });
    return response;
  },
  getCompliance: async () => {
    const response = await supabase.functions.invoke('security-compliance-get');
    return response;
  },
  reportIncident: async (data: any) => {
    const response = await supabase.functions.invoke('security-incident-report', {
      body: data,
    });
    return response;
  },
};

// ==================== Economy APIs ====================
export const economyApi = {
  transfer: async (data: any) => {
    const response = await supabase.functions.invoke('economy-transfer', {
      body: data,
    });
    return response;
  },
  getBalance: async (did: string) => {
    const response = await supabase.functions.invoke('economy-balance-get', {
      body: { did },
    });
    return response;
  },
  getTransactions: async (filters: any) => {
    const response = await supabase.functions.invoke('economy-transactions-get', {
      body: filters,
    });
    return response;
  },
  stake: async (data: any) => {
    const response = await supabase.functions.invoke('economy-stake', {
      body: data,
    });
    return response;
  },
  getMetrics: async () => {
    const response = await supabase.functions.invoke('economy-metrics-get');
    return response;
  },
};

// ==================== Metaverse APIs ====================
export const metaverseApi = {
  createSpace: async (data: any) => {
    const response = await supabase.functions.invoke('metaverse-space-create', {
      body: data,
    });
    return response;
  },
  listSpaces: async (filters: any) => {
    const response = await supabase.functions.invoke('metaverse-spaces-list', {
      body: filters,
    });
    return response;
  },
  createAvatar: async (data: any) => {
    const response = await supabase.functions.invoke('metaverse-avatar-create', {
      body: data,
    });
    return response;
  },
  createEvent: async (data: any) => {
    const response = await supabase.functions.invoke('metaverse-event-create', {
      body: data,
    });
    return response;
  },
  getTwin: async (id: string) => {
    const response = await supabase.functions.invoke('metaverse-twin-get', {
      body: { id },
    });
    return response;
  },
};

// ==================== AI APIs ====================
export const aiApi = {
  chat: async (messages: any[]) => {
    const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/isabella-chat`;
    const response = await fetch(CHAT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({ messages }),
    });
    return response;
  },
  analyze: async (data: any) => {
    const response = await supabase.functions.invoke('ai-analyze', {
      body: data,
    });
    return response;
  },
  listAgents: async () => {
    const response = await supabase.functions.invoke('ai-agents-list');
    return response;
  },
  complianceCheck: async (data: any) => {
    const response = await supabase.functions.invoke('ai-compliance-check', {
      body: data,
    });
    return response;
  },
  listModels: async () => {
    const response = await supabase.functions.invoke('ai-models-list');
    return response;
  },
};

// ==================== API Client ====================
export const apiClient = {
  identity: identityApi,
  education: educationApi,
  security: securityApi,
  economy: economyApi,
  metaverse: metaverseApi,
  ai: aiApi,
};

export default apiClient;
