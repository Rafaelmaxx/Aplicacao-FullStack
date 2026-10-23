// verifica se ja existe o usuario

import { prismaClient } from "../../prisma/prisma";
import { RegisterInput } from "../dtos/input/auth.input";
import { User } from "../generated/prisma/client";
import { hashPassword } from "../utils/hash";
import { signJwt } from "../utils/jwt";

export class AuthService {
  async register(data: RegisterInput) {
    const existingUser = await prismaClient.user.findUnique({
      where: {
        email: data.email,
      },
    });
    if (existingUser) throw new Error("Email já cadastrado!");

    const hash = await hashPassword(data.password);

    const user = await prismaClient.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hash,
      },
    });
  }

  generateTokens(user: User) {
    const token = signJwt(
      {
        id: user.id,
        email: user.email,
      },
      "15m",
    )
  }
}
