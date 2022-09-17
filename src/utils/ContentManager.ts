
import { IFeature } from '../components/FeatureGrid/FeatureGrid';

// Could make this dynamic in the future
export default class ContentManager {
  public getFeatures(): IFeature[] {
    return [
      {
        icon: '🤑',
        title: 'Never Miss a Payment',
        description: 'View overdue invoices, setup recurring invoices and send invoice reminders all in one place.'
      },
      {
        icon: '💨',
        title: 'Improve Productivity',
        description: 'Create generic programme templates that can be tweaked per client to save time on endless copy-pasting.'
      },
      {
        icon: '💬',
        title: 'Communicate More Effectively',
        description: 'Add videos, voice notes, images and text to checkins as well as notes to each set and exercise in your clients plan.'
      }
    ];
  }

  public getBenefitContent(): { heading: string, description: string } {
    return {
      heading: 'Ditch the Spreadsheets',
      description: 'The SimpliTrack client app lets your clients record their workouts against their plans, whilst adding their own videos and notes. This allows you to leave form feedback and any other comments without changing windows, as well as viewing the client videos and notes next to their workout plan',
    }
  }
}