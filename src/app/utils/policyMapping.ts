// 사용자 입력값과 라우트를 매핑하는 유틸리티

export type JobValue = 'parent' | 'self-employed' | 'student-career' | 'office-worker' | 'etc';
export type AgeValue = 'under-20' | '20-30' | '40-50' | '50-60' | '70-plus';
export type RegionValue = 'a' | 'b' | 'c' | 'etc';

export interface UserProfile {
  job: JobValue;
  age: AgeValue;
  region: RegionValue;
}

// 직업 입력 → 라우트 매핑
export function getJobRoute(job: JobValue): string {
  // 그 외 직업은 직장인 페이지로
  if (job === 'etc') {
    return '/policy/job/office-worker';
  }
  return `/policy/job/${job}`;
}

// 나이 입력 → 라우트 매핑
export function getAgeRoute(age: AgeValue): string {
  // 10대 이하는 20-30 페이지로
  if (age === 'under-20') {
    return '/policy/age/20-30';
  }
  return `/policy/age/${age}`;
}

// 지역 입력 → 라우트 매핑
export function getRegionRoute(region: RegionValue): string {
  // 그 외 지역은 중산동(a) 페이지로
  if (region === 'etc') {
    return '/policy/region/a';
  }
  return `/policy/region/${region}`;
}

// localStorage에서 사용자 프로필 읽기
export function getUserProfile(): UserProfile | null {
  try {
    const saved = localStorage.getItem('campaignUserProfile');
    if (!saved) return null;

    const profile = JSON.parse(saved) as Partial<UserProfile>;

    // 모든 필수 값이 있는지 검증
    if (!profile.job || !profile.age || !profile.region) {
      return null;
    }

    return profile as UserProfile;
  } catch {
    return null;
  }
}

// localStorage에 사용자 프로필 저장
export function saveUserProfile(profile: UserProfile): void {
  localStorage.setItem('campaignUserProfile', JSON.stringify(profile));
}

// 최초 입력 후 첫 페이지 (직업 페이지) 결정
export function getInitialRoute(profile: UserProfile): string {
  return getJobRoute(profile.job);
}

// 현재 단계에서 다음 단계 라우트 결정
export function getNextRoute(currentStage: 'job' | 'age' | 'region', profile: UserProfile): string | null {
  if (currentStage === 'job') {
    return getAgeRoute(profile.age);
  }
  if (currentStage === 'age') {
    return getRegionRoute(profile.region);
  }
  // 지역 페이지는 마지막 단계
  return null;
}

// 현재 단계에서 이전 단계 라우트 결정
export function getPrevRoute(currentStage: 'job' | 'age' | 'region', profile: UserProfile): string | null {
  if (currentStage === 'job') {
    // 직업 페이지에서는 목록으로
    return '/policies';
  }
  if (currentStage === 'age') {
    return getJobRoute(profile.job);
  }
  if (currentStage === 'region') {
    return getAgeRoute(profile.age);
  }
  return null;
}
