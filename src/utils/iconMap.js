// Explicit icon map for icons referenced by name in content data
// (mockData.js `iconStr` fields). Using named imports here — instead of
// `import * as Icons from 'lucide-react'` — lets the bundler tree-shake
// away every unused icon in the library, which significantly reduces
// the production bundle size.
//
// If you add a new `iconStr` value to mockData.js, add the matching
// import + map entry here too.
import {
  Award,
  BadgeCheck,
  BarChart3,
  BrainCircuit,
  Briefcase,
  Building2,
  Calendar,
  Cloud,
  Code,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Globe,
  Kanban,
  Layers,
  Layout,
  MessageSquare,
  MonitorSmartphone,
  Settings2,
  Shield,
  Smartphone,
  Star,
  Users,
} from 'lucide-react';

export const iconMap = {
  Award,
  BadgeCheck,
  BarChart3,
  BrainCircuit,
  Briefcase,
  Building2,
  Calendar,
  Cloud,
  Code,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Globe,
  Kanban,
  Layers,
  Layout,
  MessageSquare,
  MonitorSmartphone,
  Settings2,
  Shield,
  Smartphone,
  Star,
  Users,
};

export const getIcon = (name, fallback = Star) => iconMap[name] || fallback;
