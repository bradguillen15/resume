import { describe, it, expect } from 'vitest';
import {
  MAX_MESSAGES,
  MAX_MESSAGE_LENGTH,
  HISTORY_SENT_TO_SERVER,
} from '../chat';
import chatLimits from '../../../shared/chatLimits.json';

describe('chat limits sync', () => {
  it('client exports match shared/chatLimits.js', () => {
    expect(MAX_MESSAGES).toBe(chatLimits.MAX_MESSAGES);
    expect(MAX_MESSAGE_LENGTH).toBe(chatLimits.MAX_MESSAGE_LENGTH);
    expect(HISTORY_SENT_TO_SERVER).toBe(chatLimits.HISTORY_SENT);
  });
});
