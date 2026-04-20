export enum UserType {
  User = 'User',
  Admin = 'Admin',
}

export enum OrganisationType {
  PrivateLimited = 'PrivateLimited',
  GovernmentOrganisation = 'GovernmentOrganisation',
  NonProfitOrganisation = 'NonProfitOrganisation',
  EducationalInstitute = 'EducationalInstitute',
  ForeignMNC = 'ForeignMNC',
  Corporate = 'Corporate',
  IndianMNC = 'IndianMNC',
  Startup = 'Startup',
  Others = 'Others',
}

export enum OrganisationSize {
  Others = 'Others',
  Eleven_100 = 'Eleven_100',
  One01_500 = 'One01_500',
  Five01_1000 = 'Five01_1000',
  One001_5000 = 'One001_5000',
  MoreThan5000 = 'MoreThan5000',
  DontKnow = 'DontKnow',
}

export enum AdminStatus {
  Pending = 'Pending',
  Approved = 'Approved',
  Rejected = 'Rejected',
}

export enum ReportStatus {
  Pending = 'Pending',
  Reviewed = 'Reviewed',
  Rejected = 'Rejected',
}

export enum FriendStatus {
  Requested = 'Requested',
  Friends = 'Friends',
}

export enum FollowStatus {
  Requested = 'Requested',
  Following = 'Following',
}

export enum AccountType {
  Public = 'Public',
  Private = 'Private',
}

// ==============================
// JOBS
// ==============================

export enum JobStatus {
  Draft = 'Draft',
  Published = 'Published',
  Paused = 'Paused',
  Closed = 'Closed',
  Expired = 'Expired',
}

export enum JobApplicationStatus {
  Applied = 'Applied',
  Shortlisted = 'Shortlisted',
  Interview = 'Interview',
  Offered = 'Offered',
  Hired = 'Hired',
  Rejected = 'Rejected',
  Withdrawn = 'Withdrawn',
}

// ==============================
// RESUME
// ==============================

export enum ResumeSkillLevel {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
  Expert = 'Expert',
}

export enum LanguageProficiency {
  Basic = 'Expert',
  Conversational = 'Conversational',
  Professional = 'Professional',
  Native = 'Native',
}

// ==============================
// EVENTS
// ==============================

export enum EventStatus {
  Draft = 'Draft',
  Published = 'Published',
  Cancelled = 'Cancelled',
  Completed = 'Completed',
}
